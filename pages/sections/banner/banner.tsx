import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import css from './banner.module.css';
import { motion } from "framer-motion";

export default function Banner() {

    const ball = {
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
            marginLeft: -500
        },
        variantB: {
            opacity: 1,
            marginLeft: 0,
        },

    }

    // @ts-ignore
    return (
        <div>
            <div>
            <div className={css.bgpage}>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
                <Container>
                    <Row>
                        <Col>
                            <motion.div
                                 variants={text}
                                 initial="variantA"
                                 animate="variantB"
                                 transition={{duration: 1.2}}
                                 className={css.position}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1 className={css.title}>Hello, I'm <span className={css.name}>John Doe</span></h1>
                                <p className={css.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> nullam venenatis metus nec erat porttitor tincidunt.
                                </p>
                                <div className={css.botao}>
                                     Saiba mais! &lt;/&gt;
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    )
}
