import "./App.scss";
import Table from './component/table';
const obj = {
  ten: 'Bình',
  ho: "Trần",
  age: 30,
}
function App() {
  return (
    // sử dụng ul li tạo ra 1 list môn học tầm 5 cái
    // sau đó sử for, while... và if else và biến để style cho 5 cái li kia có màu sắc
    // như sau: cứ li là số chẵn thì có màu vàng còn li là số lẻ sẽ có màu đỏ

    
    <div className="container">
      {/* props là chúng dùng để truyền data từ cha vào con */}
      <Table nameCol={obj}/>
    </div>
  );
}

export default App;
