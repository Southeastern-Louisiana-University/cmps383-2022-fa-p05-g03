import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar/NavBar';

const theme = createTheme();

export default function LoginPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <NavBar title="GAME X-CHANGE" sections={sections} />
                <main>
                    <div className="main-content">
                        <div className="top-header"><Header>  </Header>
                            <div className="flex-box-centered-content-login-page">
                                <div className="login-form">
                                    <br></br>
                                    <Segment raised className="login-box">
                                        <Image size='small' src={logo} className="login-logo" centered />
                                        <Header size="huge">Welcome Back!</Header>
                                        <Formik initialValues={initialValues} onSubmit={submitLogin}>
                                            <Form>
                                                <div>
                                                    <div>
                                                        <div className="field-label">
                                                        </div>
                                                        <label><Icon name='user'></Icon></label>
                                                        <Field className="field" id="userName" name="userName" icon placeholder='User Name' />
                                                    </div>
                                                    <div>
                                                        <div className="field-label">
                                                            <label></label>
                                                        </div>
                                                        <Icon name='lock'></Icon>
                                                        <Field className="field" id="password" name="password" type="password" input placeholder='Password' />
                                                    </div>
                                                    <div className="button-container-login-page">
                                                        <Button color="violet" className="login-button" type="submit">
                                                            Login
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </Segment>
                                </div>
                            </div>
                        </div>
                        <div className="page-footer"><Header>Copyright</Header></div>
                    </div>
                </main>
            </Container>
        </ThemeProvider>
    );
}