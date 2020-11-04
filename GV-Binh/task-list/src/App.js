import "./App.scss";

function App() {
  return (
    // sử dụng ul li tạo ra 1 list môn học tầm 5 cái
    // sau đó sử for, while... và if else và biến để style cho 5 cái li kia có màu sắc
    // như sau: cứ li là số chẵn thì có màu vàng còn li là số lẻ sẽ có màu đỏ

    <div className="container">
      <div className="hello">XIn chào các bạn</div>
      <div className="first">
        <p className="react">REACTJS</p>
        <p className="node">NODEJS</p>
      </div>

      <div className="item-1">Tôi là item 1</div>
      <div className="item-2">Tôi là item 2</div>

      <div className="box"> Tôi là mixin </div>

      <ul>
        <li className="items-1">Toán</li>
        <li className="items-2">Văn</li>
        <li className="items-3">Anh</li>
        <li className="items-4">Javascript</li>
        <li className="items-5">Reactjs</li>
      </ul>

      <div class="container">
        <div class="container__first -font-30"> Tôi là con 1 theo BEM</div>
        <div class="container__two">Tôi là con 2 theo BEM</div>
      </div>
    </div>
  );
}

export default App;
