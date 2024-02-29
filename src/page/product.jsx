import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Caffe_latte from '../assets/caffe latte.jpg';
import Cappuccino from '../assets/cappuccino.jpg';
import Caffe_mocha from '../assets/caffe mocha.jpg';
import Caramel_macchiato from '../assets/caramel macchiato.jpg';
import Caffe_americano from '../assets/caffe americano.jpg';
import Matcha_coffee from '../assets/matcha fussion.jpg';
import Espresso_macchiato from '../assets/espresso macchiato.jpg';
import Shaken_espresso from '../assets/shaken espresso.jpg';
import Cold_foam from '../assets/cold foam.jpg';



function CardProduct() {
  return (
    <div className="homepage">
    <header>
      <h1>Welcome to Coffee Shop</h1>
      <p>Discover the finest coffee blends and treats!</p>
    </header>
    <section className="featured-products" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Caffe_latte} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Caffe Latte</Card.Title>
        <Card.Text>
          Rich, full-bodied espresso in steamed milk, lightly topped with foam. A caffè latte is simply a shot or two of bold, tasty espresso with fresh, sweet steamed milk over it
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.48.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Cappuccino} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Cappuccino</Card.Title>
        <Card.Text>
          Espresso with steamed milk, topped with a deep layer of foam.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.48.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Caffe_mocha} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Caffe Mocha</Card.Title>
        <Card.Text>
        Espresso with bittersweet mocha sauce and steamed milk, topped with sweetened whipped cream. Delightful.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.55.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Caramel_macchiato} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Caramel  Macchiato</Card.Title>
        <Card.Text>
        Espresso combined with vanilla-flavoured syrup, milk and caramel sauce over ice. A Starbucks classic, chilled for a classic summer’s day. To our signature espresso we add a creamy mix of vanilla syrup and cold milk poured over ice; it’s then topped with our proprietary buttery caramel sauce. Sweet! 
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.59.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Caffe_americano} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Caffe Americano</Card.Title>
        <Card.Text>
        HOT: Rich, full-bodied espresso with hot water.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.37.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Matcha_coffee} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Iced Espresso & Matcha Fusion</Card.Title>
        <Card.Text>
            We’ve combined our signature Espresso Roast with fine Matcha powder and milk to create the beautifully-layered Matcha & Espresso Fusion. Enjoy it hot and iced.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.65.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Espresso_macchiato} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Espresso Macchiato</Card.Title>
        <Card.Text>
        Sometimes a touch is just enough. And so it is with the slight dab of foam we set atop our signature espresso in this classic European-style beverage.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.60.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Shaken_espresso} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Double Shot Iced Shaken Espresso</Card.Title>
        <Card.Text>
        Two fresh shots of espresso, hand shaken with classic syrup and ice, finished with low fat milk mixed with sweetened whipped cream.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.65.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '0 1rem' }}>
      <Card.Img variant="top" src={Cold_foam} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Cold Foam</Card.Title>
        <Card.Text>
        Slightly sweetened ice-cold espresso, poured through a distinct layer of surprisingly creamy, nonfat milk cold foam.
        </Card.Text>
        <div className='button-group' >
          <Card.Text>Rp.44.000</Card.Text>
          <div className='btn-qty' style={{ margin: '0 0rem' }}>
          <Button variant="light">-</Button>
            <span>0</span>
          <Button variant="light">+</Button>
          </div>
          <br></br>
          <Button variant="primary">Order</Button>
        </div>
      </Card.Body>
    </Card>
    </section>
    <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
      <p>© 2024 Coffee Shop. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default CardProduct;
