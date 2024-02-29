import Table from 'react-bootstrap/Table';

function List_product(){
    return(
        <Table style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Caffe Latte</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.48.000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cappuccino</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.48.000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Caffe Mocha</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.55.000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Caramel Macchiato</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.59.000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Caffe Americano</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.37.000</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Iced Espresso & Matcha Fusion</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.65.000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Espresso Macchiato</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.60.000</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Double Shot Iced Shaken Espresso</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.65.000</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Cold Foam</td>
            <td>ESPRESSO BEVERAGES</td>
            <td>Rp.44.000</td>
          </tr>
        </tbody>
      </Table>
    )
}

export default List_product;