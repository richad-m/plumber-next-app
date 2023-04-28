import React, { FormEvent, FormEventHandler } from "react";

function ContactForm() {
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-4/5  sm:w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <form className="mt-6" onSubmit={submitHandler}>
          <div className="flex-col sm:flex-row gap-4">
            <div className="mb-2 w-1/2">
              <label>
                <span className="text-gray-700">Nom</span>
                <input
                  type="text"
                  name="name"
                  className="
              w-full
              block px-3 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="mb-2 w-1/2">
              <label>
                <span className="text-gray-700">Prénom</span>
                <input
                  type="text"
                  name="name"
                  className="
              w-full
              block px-3 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  placeholder="John cooks"
                />
              </label>
            </div>
          </div>
          <div className="mb-2 w-1/2">
            <label>
              <span className="text-gray-700">Adresse</span>
              <input
                type="text"
                name="name"
                className="
              w-full
              block px-3 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                className="
              block
              w-full
              mt-2 px-3 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email</span>
              <select
                name="email"
                className="
              block
              w-full
              mt-2 px-3 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                placeholder="john.cooks@example.com"
                required
              >
                <option
                  value="volvo"
                  className="              block
              w-full
              mt-2 px-3 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                >
                  Volvo
                </option>
                <option
                  value="saab"
                  className="block
                         w-full
                         mt-2 px-3 py-2
                         border-gray-300
                         rounded-md
                         shadow-sm
                         focus:border-indigo-300
                         focus:ring
                         focus:ring-indigo-200
                         focus:ring-opacity-50
                       "
                >
                  Saab
                </option>
                <option
                  value="mercedes"
                  className="              block
                w-full
                mt-2 px-3 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                >
                  Mercedes
                </option>
                <option
                  value="audi"
                  className="              block
                w-full
                mt-2 px-3 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                >
                  Audi
                </option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
              block
              w-full
              mt-2 px-3 py-3
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                rows={5}
              ></textarea>
            </label>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
            >
              Nous contacter
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
