import React from "react";

const body = () => {
  return (
    <div>
      <main>
        <section>
          <div id="div1">
            <div
              id="start"
              className="flex flex-col items-center p-4 gap-3 text-center"
            >
              <h1 className="text-[50px] font-[800]  leading-none items-center justify-center">
                <span className="text-lime-500">Attend Live</span>
                <br />
                Classes Every Week
              </h1>

              <h2 className="text-left leading-7 font-sans text-lg mt-3">
                Join founders, freelancers, designers, FAANG engineers, indie
                hackers, and more in our 24/7 WhatsApp Group for less than a cup
                of coffee.{" "}
              </h2>
              <button className="bg-lime-500 p-2 text-lg border-spacing-0 rounded-xl mt-4">
                Join 24/7 WhatsApp + discord at $5
              </button>
            </div>
            <div id="img" className="p-5 w-full">
              <img
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/31454667/257703538-9009ac7b-b0fb-4083-9f22-193e56c10f1c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240620T120313Z&X-Amz-Expires=300&X-Amz-Signature=062aff177dec1731f6bb3f1e4482991729129ae8fdf56827f5b6a14e0f36cf0b&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=673170075"
                alt=""
              />
            </div>
            <div className="flex flex-col m-auto items-center">
              <div className="flex flex-row  py-2 px-2"> 
                <img src="src\assets\images\icon-guides.svg" alt="" />
                <h3 className="p-2">5+ Guides for Free</h3>
              </div>
              <div  className="flex flex-row py-2">
                <img src="src\assets\images\icon-courses.svg" alt="" />
                <h3 className="p-2">Exclusive Courses & Projects
                </h3>
              </div>
              <div className="flex flex-row py-2">
                <img src="src\assets\images\icon-whatsapp.svg" alt="" />
                <h3 className="p-2">24/7 WhatsApp Support Group</h3>
              </div>
              <div className="flex flex-row py-2">
                <img src="src\assets\images\icon-sessions.svg" alt="" />
                <h3 className="p-2">1:1 Free Session</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default body;
