import { FC, useRef, useCallback } from "react";
import Head from "next/head";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/Button";

import getValidationError from "../../utils/getValidationErros";

import { Main, Title, SubTitle, FormContainer, Footer } from "./styles";

interface FormData {
  email: string;
  password: string;
}

const Home: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        title: Yup.string().required("Required field"),
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
            <Input name="title" placeholder="Required" label="Title" />
            <Input name="color" label="Color" />
            <Input name="icon" label="Icon" />
            <Input name="Color icon" label="COlor icon" />
            <Input name="url" label="URL" />

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
