import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CreatePost = () => {
  let history = useHistory();
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data, { resetForm }) => {
    console.log(data);
    resetForm({
      data: {
        title: "",
        postText: "",
        username: "",
      },
    });
    console.log(initialValues);
    axios.post("http://localhost:3001/posts", data).then(() => {
      console.log("success!", data);
      history.push("/");
    });
  };
  return (
    <div className="CreatePost">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="title">Title</label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="createTitle"
            name="title"
            placeholder="enter a title..."
          ></Field>
          <label htmlFor="postText">Post Text</label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="createPostText"
            name="postText"
            placeholder="enter the text of your post..."
          ></Field>
          <label htmlFor="username">username</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="createPostUserName"
            name="username"
            placeholder="enter your username..."
          ></Field>
          <button type="submit">Submit Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
