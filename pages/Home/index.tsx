import { FC, useRef, useCallback } from "react";
import Head from "next/head";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Input from "../../components/Input";
import InputMask from "../../components/InputMask";
import Select from "../../components/Select";
import Button from "../../components/Button";

import getValidationError from "../../utils/getValidationErros";
import { optionsStyles } from "../../constants/optionStyles";

import { Main, Title, SubTitle, FormContainer, Footer } from "./styles";

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
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        label: Yup.string().required("Required field"),
        style: Yup.string().required("Required field"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationError(error);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main>
        <Title>Custom Badges Generator</Title>
        <SubTitle>For GitHub</SubTitle>

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
              placeholder="Optional"
              info={`Set background of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.`}
            />
            <Input
              name="message"
              label="Message"
              info="right-hand-side text"
              placeholder="Optional"
              widthTootip={150}
            />
            <Input
              name="color"
              placeholder="Optional"
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
                  superuser, telegram, travis) or{" "}
                  <a href="https://simpleicons.org/" target="_blank">
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
            <Input
              name="logoWidth"
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

      <Footer>
        <span>developed by</span>
        <a href="https://andrecoelho.dev" target="_blank">
          <img
            src="/assets/images/andrecoelho.png"
            width={150}
            alt="andrecoelho.dev"
          />
        </a>
      </Footer>
    </>
  );
};

export default Home;
