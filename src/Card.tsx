import viteLogo from "/vite.svg";

export default function Card() {
  return (
    <>
      {" "}
      {/*react fragment*/}
      <img src={viteLogo} alt="vite logo" height={100} width={100} />
      <h2>My Card</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat
        pulvinar nibh. Sed egestas felis eget massa tincidunt, eget imperdiet
        magna ultricies. Nullam fermentum eget nunc ut egestas. Duis vestibulum
        gravida augue a rutrum. Duis molestie lacus sit amet magna volutpat
        tempus. Nullam fringilla, ante ut maximus efficitur, risus dui tempus
        enim, et rhoncus nulla augue sed tellus. Ut pulvinar et libero eu porta.
        Etiam quis aliquet erat. Morbi elementum eleifend lorem at aliquet.
        Curabitur condimentum ex mi, vel efficitur eros pretium eu.
      </p>
    </>
  );
}
