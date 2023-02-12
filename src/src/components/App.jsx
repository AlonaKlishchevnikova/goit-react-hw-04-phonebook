import MyPhonebook from "modules/MyPhonebook/MyPhonebooks";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <MyPhonebook />
    </div>
  );
};
export default App;