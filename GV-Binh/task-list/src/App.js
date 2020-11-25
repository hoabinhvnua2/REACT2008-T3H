import "./App.scss";
import SiderDemo from './layout/layout';

function App() {
  return (
    // sử dụng ul li tạo ra 1 list môn học tầm 5 cái
    // sau đó sử for, while... và if else và biến để style cho 5 cái li kia có màu sắc
    // như sau: cứ li là số chẵn thì có màu vàng còn li là số lẻ sẽ có màu đỏ

    
    <>
      {/* props là chúng dùng để truyền data từ cha vào con */}
      {/* <Table nameCol={obj}/> */}
      <SiderDemo />
    </>
  );
}

export default App;
