import Form from "react-bootstrap/Form";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div className="containerMoreInformation">
      <Container>
        <h2 className="titleMoreInformation">
          <span className="primaryLetter">C</span>ontact
        </h2>
        <hr className="hrAboutUS" />
        <Row>
          <Col md={12} lg={6}>
            <p className="paragraphAbousUs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              doloribus perferendis doloremque porro id sed beatae sequi
              delectus iure error vel similique labore, debitis, aspernatur vero
              nisi! Modi exercitationem dolorem corrupti. Nobis repellat
              eligendi nulla, enim sunt consequuntur maxime saepe veniam
              deserunt est nemo ut, quod nam illum! Minima sunt odit, veniam
              quos quia possimus modi aspernatur quas. Harum magnam quidem ipsum
              dolor debitis eos ipsa quasi consequuntur, voluptas quam odit
              deleniti veniam! Odio deserunt ducimus, eveniet voluptatibus nisi
              molestias aliquam id mollitia nostrum. Quod nulla doloribus unde
              vel. Rerum aliquam perspiciatis ipsam iusto perferendis asperiores
              a dolores labore ab. Id distinctio itaque at ut amet, accusamus
              atque ea ipsa tempore veritatis consequatur similique harum
              reprehenderit sit sint eos eveniet porro beatae. Molestias, modi.
              Dicta quo soluta animi incidunt excepturi est? Nihil dolorem
              tempore debitis, consequatur fuga vel qui cum quas id, libero quo
              atque quibusdam magni iste deleniti necessitatibus?
            </p>
          </Col>
          <Col md={12} lg={6}>
            <p className="paragraphAbousUs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              doloribus perferendis doloremque porro id sed beatae sequi
              delectus iure error vel similique labore, debitis, aspernatur vero
              nisi! Modi exercitationem dolorem corrupti. Nobis repellat
              eligendi nulla, enim sunt consequuntur maxime saepe veniam
              deserunt est nemo ut, quod nam illum! Minima sunt odit, veniam
              quos quia possimus modi aspernatur quas. Harum magnam quidem ipsum
              dolor debitis eos ipsa quasi consequuntur, voluptas quam odit
              deleniti veniam! Odio deserunt ducimus, eveniet voluptatibus nisi
              molestias aliquam id mollitia nostrum. Quod nulla doloribus unde
              vel. Rerum aliquam perspiciatis ipsam iusto perferendis asperiores
              a dolores labore ab. Id distinctio itaque at ut amet, accusamus
              atque ea ipsa tempore veritatis consequatur similique harum
              reprehenderit sit sint eos eveniet porro beatae. Molestias, modi.
              Dicta quo soluta animi incidunt excepturi est? Nihil dolorem
              tempore debitis, consequatur fuga vel qui cum quas id, libero quo
              atque quibusdam magni iste deleniti necessitatibus?
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Contact;
