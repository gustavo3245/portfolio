import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import css from '../styles/components.module.css';
import { motion } from "framer-motion";

export default function Navbar() {

    const logo = {
        variantA: {
            opacity: 0,
            marginTop: -500
        },
        variantB: {
            opacity: 1,
            marginTop: 0,
        },

    }

    const text = {
        variantA: {
            opacity: 0,
            marginTop: 100
        },
        variantB: {
            opacity: 1,
            marginTop: 0,
        },

    }

    return (
        <div className={css.bgpage}>
            <Container className="py-4">
                <div>
                    <Row>
                        <Col style={{marginTop: -15}} md="2">
                            <motion.div variants={logo}
                                        initial="variantA"
                                        animate="variantB"
                                        transition={{duration: 1.2}}
                                        className={css.logo}>
                                LOGO
                            </motion.div>
                        </Col>
                        <Col>
                            <motion.div variants={text}
                                 initial="variantA"
                                 animate="variantB"
                                 transition={{duration: 1.2}}
                                 className="d-flex justify-content-center align-items-center">
                                <div className={css.textselect}>Referencias</div>
                                <div className={css.text}>Projetos</div>
                                <div className={css.text}>GitHub</div>
                                <div className={css.text}>Experiencia</div>
                                <div className={css.text}>Lorem Ipsum</div>
                            </motion.div>
                        </Col>
                        <Col className="d-flex justify-content-end" md="2">
                            <motion.div style={{margin: 0}}
                                        variants={logo}
                                        initial="variantA"
                                        animate="variantB"
                                        transition={{duration: 1}}
                                        className={css.text}>
                                <img width="26px" src="/menu.png" alt=""/>
                              </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
