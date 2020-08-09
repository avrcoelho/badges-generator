import React, { FC, useRef, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { scroller } from 'react-scroll';

import Head from '../components/Head';
import Input from '../components/Input';
import InputMask from '../components/InputMask';
import Select from '../components/Select';
import Button from '../components/Button';
import Results from '../components/Results';
import Footer from '../components/Footer';

import getValidationError from '../utils/getValidationErros';
import { optionsStyles } from '../constants/optionStyles';

import { Main, Title, SubTitle, FormContainer } from './styles';

interface FormData {
  label: string;
  message: string;
  color: string;
  style: string;
  labelColor: string;
  logo: string;
  logoColor: string;
  logoWidth: string;
  link: string;
  cacheSeconds: string;
}

const Home: FC = () => {
  const [markdownCode, setMarkdownCode] = useState('');
  const [htmlCode, setHtmlCode] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        label: Yup.string().required('Required field'),
        message: Yup.string().when('style', {
          is: value => value === 'social',
          then: Yup.string().required('Required field'),
          otherwise: Yup.string(),
        }),
        style: Yup.string().required('Required field'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passe
      let params = '';
      let outherParams = '';
      let html = '';
      let link: null | string = null;
      const shielbLink = 'https://img.shields.io/badge/';

      params += `${data.label.trim()}-`;
      params += data.message.trim() ? `${data.message.trim()}-` : '';
      params +=
        data.message.trim() && data.color.trim()
          ? `${data.color.replace('#', '').trim()}-`
          : '';
      params += data.message.trim() && !data.color.trim() ? 'green-' : '';
      params += !data.message.trim() && !data.labelColor.trim() ? 'gray-' : '';
      params +=
        !data.message.trim() && data.labelColor.trim()
          ? `${data.labelColor.replace('#', '').trim()}-`
          : '';

      Object.entries(data).forEach(([key, value]) => {
        if (
          value.trim() &&
          key !== 'label' &&
          key !== 'message' &&
          key !== 'color'
        ) {
          if (
            key === 'labelColor' &&
            data.labelColor.trim() &&
            data.message.trim()
          ) {
            outherParams += `${key}=${value.replace('#', '')}&`;
          } else if (key !== 'labelColor') {
            outherParams += `${key}=${value}&`;
          }
        }
      });

      if (data.link) {
        link = data.link;
      }

      params = params.substr(0, params.length - 1);
      outherParams = outherParams.substr(0, outherParams.length - 1);

      const markdoun = `[![${data.label}](${shielbLink}${params}${
        outherParams ? `?${outherParams}` : ''
      })]${link ? `(${link})` : ''}`;

      html = link ? `<a href="${link}">` : '';
      html += `<img src="${shielbLink}${params}${
        outherParams ? `?${outherParams}` : ''
      }" alt="${data.label}" />`;
      html += link ? '</a>' : '';

      setMarkdownCode(markdoun);
      setHtmlCode(html);

      scroller.scrollTo('results', {
        duration: 1500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationError(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <>
      <Head title="Generate Badges for GitHub" />
      <Main>
        <Title>Badges Generator</Title>
        <SubTitle>For README.md</SubTitle>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="label"
              placeholder="Required"
              label="Label"
              info="left-hand-side text"
              widthTootip={150}
            />
            <Input
              name="labelColor"
              label="label Color"
              placeholder="Optional (Default: gray)"
              info={`Set background of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.`}
            />
            <Input
              name="message"
              label="Message"
              info="right-hand-side text"
              placeholder="Required if the style is social"
              widthTootip={150}
            />
            <Input
              name="color"
              placeholder="Optional (Default: green)"
              label="Message Color"
              info={`Set background of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.`}
            />
            <Select name="style" options={optionsStyles} label="style" />
            <Input
              name="logo"
              label="Logo"
              placeholder="Optional"
              info={
                <>
                  Insert one of the named logos from (bitcoin, dependabot,
                  discord, gitlab, npm, paypal, serverfault, stackexchange,
                  superuser, telegram, travis) or{' '}
                  <a
                    href="https://simpleicons.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    simple-icons
                  </a>
                  . Simple-icons are referenced using names as they appear on
                  the simple-icons site. If the name includes spaces, replace
                  them with dashes. Or insert custom logo image (≥ 14px high).
                  There is a limit on the total size of request headers we can
                  accept (8192 bytes). From a practical perspective, this means
                  the base64-encoded image text is limited to somewhere slightly
                  under 8192 bytes depending on the rest of the request header.
                </>
              }
            />
            <Input
              name="logoColor"
              label="Logo color"
              placeholder="Optional"
              info="Set the color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos but not for custom logos."
            />
            <InputMask
              name="logoWidth"
              mask="99999999999999999999"
              label="Logo width"
              placeholder="Optional"
              info="Set the horizontal space to give to the logo"
            />
            <Input
              name="link"
              label="Link"
              placeholder="Optional"
              info="Specify what clicking on the left/right of a badge should do (esp. for social badge style)"
            />
            <InputMask
              name="cacheSeconds"
              mask="99999999999999999999"
              label="Cache seconds"
              placeholder="Optional"
              info={`Set the HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.`}
            />

            <Button type="submit">Generate</Button>
          </Form>
        </FormContainer>
      </Main>
      {markdownCode && <Results markdown={markdownCode} html={htmlCode} />}
      <Footer />
    </>
  );
};

export default Home;
