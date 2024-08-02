import { useState } from "react";
import { FAQs } from "./data";

function App() {
  const [selectedFaq, setSelectedFaq] = useState(null);

  function showFaq(id) {
    setSelectedFaq(id);
  }

  function hideFaq() {
    setSelectedFaq(null);
  }

  return (
    <main className="my-4 mx-auto w-4/5">
      <h1 className="text-9xl mb-8 text-center">Accordian</h1>
      <ul className="py-16 px-32 w-full">
        {FAQs.map((faq) => {
          return (
            <li id="faq" className="w-full p-4 mb-4 text-2xl border text-black bg-slate-200" key={faq.id}>
              <span className="flex justify-between mb-4">
                {faq.question}{" "}
                <span>
                  {selectedFaq === faq.id ? (
                    <i
                      onClick={hideFaq}
                      className="fa fa-angle-up p-2 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i
                      onClick={() => {
                        showFaq(faq.id);
                      }}
                      className="fa fa-angle-down p-2 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  )}
                </span>
              </span>
              {selectedFaq === faq.id && <p id="answer">{faq.answer}</p>}
            </li>            
          );
        })}
      </ul>
    </main>
  );
}

export default App;
