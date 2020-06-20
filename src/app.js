import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
// import "./styles/bootstrap.min.css";
import "./styles/style.css";

import bot from "./images/bot.jpg";
import user from "./images/user.jpg";
import kakashi from "./images/kakashi.jpg";

const Sent = (props) => {
  return (
    <div>
      <div className="outgoing-chats">
        <div className="outgoing-msg">
          <div className="outgoing-chats-msg">
            <p>{props.message.slice(1)}</p>
            {/* <span className="time">11:01 PM | Now</span> */}
          </div>
          <div className="outgoing-chats-img">
            <img src={kakashi} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Recieved = (props) => {
  return (
    <div className="recieved-chats">
      <div className="recieved-chats-img">
        <img src={kakashi} />
      </div>
      <div className="recieved-msg">
        <div className="recieved-msg-inbox">
          <p>{props.message.slice(1)}</p>
          {/* <span className="time">11:01 PM | Now</span> */}
        </div>
      </div>
    </div>
  );
};

const HandleChat = (props) => {
  return (
    <div>
      {props.messages.map((message, index) => {
        return message[0].toLowerCase() == "b" ? (
          <Recieved message={message} key={index} />
        ) : (
          <Sent message={message} key={index} />
        );
      })}
    </div>
  );
};

class ChatBot extends React.Component {
  state = {
    messages: [
      "bHello i'm Bob and I would try to answer all your COVID-19 related questions.\n Type your questions in the input box below and hit enter when done",
    ],
    phrases: [
      ["Hi", "Hello", "How are you doing", "hello", "hi"],
      [
        "What is COVID-19",
        "corona",
        "corona virus",
        "what is corona virus",
        "covid19",
        "covid-19",
      ],
      [
        "What is the source of COVID-19",
        "source of corona",
        "source of covid-19",
      ],
      [
        "Is COVID-19 airborne",
        "can the virus be transmitted through air",
        "Is corona virus airborne",
        "how is covid19 transitted",
        "how is corona virus transmitted",
        "transmission",
      ],
      [
        "What are the symptoms of COVID-19",
        "symptoms of corona virus",
        "symptoms of covid19",
        "what are the symptoms of corona virus",
        "symptoms of the virus",
        "symptoms",
      ],
      [
        "Has anyone died from the disease in Nigeria",
        "has there been any death",
      ],
      [
        "Is there a treatment/cure for coronavirus",
        "what are the treatment",
        "how is it treated",
        "is there a cure",
        "cure",
        "medicine",
      ],
      ["What does self-isolation mean", "isolation", "self-isolation"],
      ["What does physical distancing mean"],
      [
        "How do I get tested for COVID-19",
        "test",
        "how to test for the virus",
        "testing",
        "how do i get tested",
      ],
      [
        "How do I avoid becoming infected with COVID-19",
        "what are the prevention measures to take",
        "preventive measures",
        "preventing the virus",
        "protected",
        "avoid the virus",
      ],
      [""],
      [""],
    ],
    res: [
      "I'm doing fine and you?",
      "Coronaviruses are zoonotic, meaning they are normally transmitted between animals and people. The coronavirus disease (COVID-19) is caused by a new strain of coronavirus (SARS-CoV-2) that has not been previously identified in humans. It was first reported to WHO on the 31st of December, 2019 in Wuhan, China.",
      "Scientists and public health officials are working hard to identify the source of the SARS-CoV-2 which is the virus that causes COVID-19. The initial transmission appeared to be from an animal source, but there has been person-to-person transmission in countries.",
      "Coronavirus can be transmitted when people breathe in these droplets. Therefore, it is important to stay at least 2 metres away from a person who is coughing or sneezing.",
      "Cough, Body pain, Headache, Sore throat, Difficulty in breating, Fatigue, Runny nose",
      "Yes. There have been fatalities recorded in Nigeria",
      "There is no specific cure yet for COVID-19. However, there are many ongoing clinical trials to test various potential antivirals. Current management of cases aims to relieve the symptoms while the body’s immune system fights the illness.",
      "This means strictly staying at home or identified accommodation, away from situations where you mix with family members or the general public, for the period of 14 days",
      "This is an effective strategy to reduce physical interaction between people towards limiting the spread of COVID-19. This means maintaining a distance of at least 2 metres i.e. 6 feet from others",
      "The criteria for testing for COVID-19 is according to the national case definition. This is anyone with cough and/or fever (or history of fever in the last two weeks) with one or more of known COVID-19 symptoms. Do not self-medicate. The community case definition can also be accessed",
      `Wash your hands regularly with soap and water or use an alcohol-based sanitiser if no water and soap is available
      Use non-medical face mask/covering for all persons while in public spaces. The NCDC has published an advisory on the use of face cloth masks
      Practice no-touch greetings
      Maintain at least 2 metres (6 feet) physical distance between yourself and anyone who is coughing or sneezing
      Avoid crowded spaces such as open markets, crowded supermarkets and pharmacies
      Adhere to national and state directives`,
    ],
    response: "",
    querry: "",
  };

  componentDidUpdate(prevProps, prevState) {}

  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.add.value.trim(" ");
    if (value !== "") {
      this.setState((prevState) => ({ querry: value }));
      e.target.elements.add.value = "";

      this.setState((prevState) => ({
        messages: prevState.messages.concat("u" + value),
      }));

      let inner;
      let outer;

      setTimeout(() => {
        this.state.phrases.forEach((phrase, index) => {
          let position = index;
          phrase.forEach((v, i) => {
            if (v.toLowerCase() == this.state.querry.toLowerCase()) {
              outer = position;
            }
          });
        });
        console.log(outer);
        setTimeout(() => {
          if (outer === undefined) {
            this.setState((prevState) => ({
              messages: prevState.messages.concat(
                "b" + "I did not quite get you, could you please re-phrase"
              ),
            }));
          } else {
            this.setState((prevState) => ({
              messages: prevState.messages.concat("b" + this.state.res[outer]),
            }));
          }
        }, 100);
      }, 2000);
    }
  };

  render() {
    return (
      <div className="">
        <div className="header">
          <h1>Chat Bot</h1>
        </div>

        <div className="container">
          <div className="msg-header">
            <div className="msg-header-img">
              <img src={kakashi} />
            </div>
            <div className="active">
              <h4>Bob</h4>
              <h6>Online</h6>
            </div>
          </div>
          <div className="chat-page">
            <div className="msg-inbox">
              <div className="chats">
                <div className="msg-page">
                  <HandleChat messages={this.state.messages} />
                </div>
              </div>
            </div>
          </div>

          <div className="msg-bottom">
            {/* <div className="bottom-icons"></div> */}
            <div className="input-group">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="add"
                  placeholder="write message..."
                />
                <button className="btn">send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<ChatBot />, appRoot);
