import React from 'react'
import { Navbar, Nav, Form, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { BsFillThreadsFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Oppo = () => {
  return (
    <div>
    {/* Header */}
       <div>
      {/* First Navbar */}
      <Navbar bg="white" variant="light" fixed="top" expand="lg" className="px-4">
        <Navbar.Brand href="#" className="font-weight-bold" style={{fontFamily:'serif'}}>
          OPPO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar1" />
        <Navbar.Collapse id="navbar1">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-secondary">Smartphones</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Tablets</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Audio</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Wearables</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Routers</Nav.Link>
            <Nav.Link href="#" className="text-secondary">About OPPO</Nav.Link>
            <Nav.Link href="#" className="text-secondary">ColorOS</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#" className="text-secondary">Community</Nav.Link>
            <Nav.Link href="#" className="text-secondary">Support</Nav.Link>
            <Form inline className="ml-3">
              <FormControl
                type="text"
                placeholder="Search OPPO.com"
                className="rounded-pill mr-sm-2"
              />
            </Form>
            <Nav.Link href="#">
              <FaRegUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="white" variant="light" fixed="top" className="justify-content-center" style={{ top: '56px' }}>
        <Nav as="ul" className="d-flex justify-content-center">
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Latest Products</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Find N Series</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Find X series</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Reno Series</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">A Series</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Filters</Nav.Link></Nav.Item>
          <Nav.Item as="li" className="mx-2"><Nav.Link href="#" className="text-dark">Compare</Nav.Link></Nav.Item>
        </Nav>
        
      </Navbar>
      <h2 className="text-center mb-4" style={{fontFamily:'fantasy'}}>  Latest Products</h2>
    </div>
    {/* Card Row 1 */}
    <Container className="mt-3 pt-3">
      {/* Heading */}
      <h4 className="text-center mb-4" style={{fontFamily:'fantasy'}}>Latest Products</h4>  
      {/* Cards Row */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img1.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3</Card.Title>
              <Card.Text>
                Slim and Lightweight, Vitality Imaging Triple Camera System
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img2.png" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              <Card.Text>
                Intuitive Cover Screen, Hasselblad Camera for Mobile
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img3.png" alt="OPPO Reno12 Pro 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 Pro 5G</Card.Title>
              <Card.Text>
                Unprecedented Reno Design, AI Portrait Expert
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img4.png" alt="OPPO Reno12 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 5G</Card.Title>
              <Card.Text>
                AI LinkBoost and BeaconLink, Reno's Best Battery Life Ever
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     {/* Section 1 */}
    <Container className="my-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <Card.Title className="display-6 fw-bold">OPPO Find N Series</Card.Title>
      </div>

      <Row>
        {/* First Card */}
        <Col md={6} className="p-1">
          <Card className="h-100 border-0">
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img variant="top" src="/oimage/img5.jpg" alt="Card Image 1" />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Find N3</Card.Title>
              {/* Card Description */}
              <Card.Text>Ultra Thin, Ultra Light, Ultra Powerful</Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={6} className="p-1">
          <Card className="h-100 border-0">
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img variant="top" src="/oimage/img6.jpg" alt="Card Image 2" />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              {/* Card Description */}
              <Card.Text>Snap for Style, Tap for More</Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     {/* Card Row 2 */}
    <Container className="my-5">
      <Row>
        {/* First Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
        <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img7.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3</Card.Title>
              <Card.Text>
                Slim and Lightweight, Vitality Imaging Triple Camera System
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
        <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img8.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              <Card.Text>
              Intuitive Cover Screen, Hasselblad Camera for Mobile
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={12} sm={6} md={3} className="mb-4">
        <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img9.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N2 Flip</Card.Title>
              <Card.Text>
              3.26" Cover Screen, New Generation Flexion Hinge
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Empty Space (for the 4th card space) */}
        <Col xs={12} sm={6} md={3} className="mb-4"></Col>
      </Row>
    </Container>
    {/* Section 2 */}
    <Container className="my-5">
      {/* Section Heading */}
      <h2 className="text-center mb-4">OPPO Find X Series</h2>

      <Row>
        {/* First Card - Takes space of two cards */}
        <Col xs={12} lg={6} xl={6} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#">
              <Card.Img variant="top" src="/oimage/img10.jpg" alt="OPPO Find N3" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X3 Pro</Card.Title>
              <Card.Text>
              Awaken Colour
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img11.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X3 Pro</Card.Title>
              <Card.Text>
              Enrich Life with 1 Billion+ Colours
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img12.png" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find X2 Pro</Card.Title>
              <Card.Text>
              120Hz QHD+ Ultra Vision Screen
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Card Row 3 */}
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img13.png" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3</Card.Title>
              <Card.Text>
                Slim and Lightweight, Vitality Imaging Triple Camera System
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img14.png" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Find N3 Flip</Card.Title>
              <Card.Text>
                Intuitive Cover Screen, Hasselblad Camera for Mobile
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img15.png" alt="OPPO Reno12 Pro 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 Pro 5G</Card.Title>
              <Card.Text>
                Unprecedented Reno Design, AI Portrait Expert
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="/oimage/img16.png" alt="OPPO Reno12 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 5G</Card.Title>
              <Card.Text>
                AI LinkBoost and BeaconLink, Reno's Best Battery Life Ever
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Section 3 */}
    <Container className="my-5">
      {/* Page Heading */}
      <div className="text-center mb-4">
      <h2 className="text-center mb-4">OPPO Reno Series</h2>
      </div>

      <Row>
        {/* First Card */}
        <Col md={6} className="p-1">
          <Card className="h-100 border-0">
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img variant="top" src="/oimage/img17.png" alt="Card Image 1" />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Find N3</Card.Title>
              {/* Card Description */}
              <Card.Text>Ultra Thin, Ultra Light, Ultra Powerful</Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={6} className="p-1">
          <Card className="h-100 border-0">
            {/* Card Image with Anchor */}
            <a href="#">
              <Card.Img variant="top" src="/oimage/img18.png" alt="Card Image 2" />
            </a>
            <Card.Body>
              {/* Card Title */}
              <Card.Title>OPPO Reno12 5G</Card.Title>
              {/* Card Description */}
              <Card.Text>AI LinkBoost and BeaconLink, Reno's Best Battery Life Ever</Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Card Row 4-5 */}
    <Container className="mt-5 pt-5">
      {/* Cards Row */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img19.webp" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 Pro 5G</Card.Title>
              <Card.Text>
              Unprecedented Reno Design, AI Portrait Expert
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img20.webp" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 5G</Card.Title>
              <Card.Text>
              AI LinkBoost and BeaconLink, Reno's Best Battery Life Ever
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img21.webp" alt="OPPO Reno12 Pro 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno12 F 5G</Card.Title>
              <Card.Text>
              Unprecedented Reno Design, AI Portrait Expert
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img22.webp" alt="OPPO Reno12 5G" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno 12 F</Card.Title>
              <Card.Text>
              Halo Light, AI LinkBoost
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img23.webp" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno11 F 5G</Card.Title>
              <Card.Text>
              64MP Ultra-Clear Main Camera, 67W SUPERVOOCTM Flash Charge
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img24.webp" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno11 Pro 5G</Card.Title>
              <Card.Text>
              Stand Out in Design, Stand Out in Portrait
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img25.webp" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno11 5G</Card.Title>
              <Card.Text>
              Natural Aesthetic Design, 32MP Telephoto Portrait Camera
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="mb-3">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center" style={{ padding: '15% 25%', backgroundColor: '#f8f9fa' }}>
              <img src="oimage/img26.webp" alt="OPPO Find N3" className="img-fluid" />
            </a>
            <Card.Body>
              <Card.Title>OPPO Reno10 Pro+ 5G</Card.Title>
              <Card.Text>
              The Portrait Expert
              </Card.Text>
              <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Learn more</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Section 4 */}
    <Container className="my-5">
      {/* Section Heading */}
      <h3 className="text-center mb-4">OPPO A Series</h3>

      <Row className="no-gutters">
        {/* First Card - Takes space of two cards */}
        <Col xs={12} lg={6} xl={6} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#">
              <Card.Img variant="top" src="oimage/img27.jpg" alt="OPPO Find N3" />
            </a>
            <Card.Body>
              <Card.Title>OPPO A3 Pro 5G</Card.Title>
              <Card.Text>
                360° Damage-Proof Armour Body, 120Hz Ultra Bright Display
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center">
              <img src="oimage/img28.jpg" alt="OPPO Find N3" className="img-fluid" />
            </a>
          </Card>
        </Col>

        {/* Third Card */}
        <Col xs={6} lg={3} xl={3} className="mb-4">
          <Card className="h-100 border-0">
            <a href="#" className="d-block text-center">
              <img src="oimage/img29.jpg" alt="OPPO Find N3 Flip" className="img-fluid" />
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Footer */}
    <footer style={{ backgroundColor: '#000', color: 'grey', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>Smartphones</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Find N3</li>
              <li>OPPO Find N3 Flip</li>
              <li>OPPO Find N2 Flip</li>
              <li>OPPO Reno12 Pro 5G</li>
              <li>OPPO Reno12 5G</li>
              <li>OPPO Reno12 F 5G</li>
              <li>OPPO A3 Pro 5G</li>
              <li>OPPO A3 5G</li>
              <li>OPPO A3</li>
              <li>OPPO A3x</li>
              <li>OPPO A60</li>
              <li>See All Smartphones</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>IoT Products</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Pad Neo</li>
              <li>OPPO Pad 2</li>
              <li>OPPO Enco Air4 Pro</li>
              <li>OPPO Enco X3i</li>
              <li>OPPO Enco Air3s</li>
              <li>OPPO Enco Buds2 Pro</li>
              <li>OPPO Enco Air3i</li>
              <li>OPPO Watch X</li>
              <li>OPPO Watch</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>Support</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>Contact Us</li>
              <li>Warranty Status</li>
              <li>Android Enterprise</li>
              <li>User Guide</li>
              <li>FAQ</li>
              <li>HeyTap</li>
              <li>Declaration of Conformity</li>
              <li>Game Space</li>
              <li>Security Response Center</li>
              <li>Quick Start Guide</li>
              <li>Online Safety Act</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>About OPPO</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>Our Story</li>
              <li>OPPO imagine IF</li>
              <li>OPPO 5G</li>
              <li>Newsroom</li>
              <li>Campaign</li>
              <li>AI Smartphone White Paper</li>
              <li>OPPO Sustainability</li>
              <li>Intellectual Property</li>
              <li>Supplier Portal</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <p style={{ color: 'white' }}>OPPO Community</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>OPPO Community</li>
            </ul>
          </Col>
        </Row>

        {/* First hr with icons and h4 */}
        <hr style={{ borderColor: 'grey' }} />
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h4 style={{ color: 'white' }}>Get Support From OPPO</h4>
          </Col>
          <Col xs={12} md={6} className="text-md-right">
            <FaFacebook size={30} style={{ paddingRight: '10px' }} />
            <AiFillTwitterCircle size={35} style={{ paddingRight: '10px' }} />
            <FaYoutube size={30} style={{ paddingRight: '10px' }} />
            <FaSquareInstagram size={30} style={{ paddingRight: '10px' }} />
            <BsFillThreadsFill size={30} style={{ paddingRight: '10px' }} />
          </Col>
        </Row>

        {/* Second hr */}
        <hr style={{ borderColor: 'grey' }} />

        {/* Last 5 li elements */}
        <Row>
          <Col>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', gap: '10px', color: 'grey' }}>
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>Legal & Compliance</li>
              <li>Copyright © 2004-2024 OPPO.</li>
              <li>All rights reserved.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Oppo
