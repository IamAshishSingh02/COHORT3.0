function App() {
  return (
    <div>
      <div>
        <PostComponent 
          name = {"Ashish Singh"}
          followerCount = {500}
          time = {"2m ago"}
          image = {"/profile-pic1.jpeg"}
          description = {"What to know how to win big? Check out how these folks won $6000 in bounties."}
        />;
      </div>

      <div>
        <PostComponent 
          name = {"Harkirat"}
          followerCount = {400}
          time = {"3m ago"}
          image = {"/profile-pic2.jpg"}
          description = {"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
        />;
      </div>

      {/* <div>
        <PostComponent />;
      </div> */}
    </div>
  ) 
}

function PostComponent({name, followerCount, time, image, description}) {
  const style = {
    backgroundColor: "#dfe6e9",
    width: 400,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10
  };

  return (
    <>
      <div style={style}>
        <div style={{display: "flex"}}>
          <div>
            <img
              src={image}
              style={{ width: 50, height: 50, borderRadius: 50 }}
              alt="Profile"
            />
          </div>

          <div style={{padding: 5, fontSize: 14}}>
            <div><b>{name}</b></div>
            <div>{followerCount} followers</div>
            <div>{time}</div>
          </div>
        </div>

        <div style={{ fontSize: 14 }}>{description}</div>
      </div>
    </>
  )
}

export default App;
