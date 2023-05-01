import React, { FormEvent, useRef, useState } from "react";

interface ContactFormValue {
  name?: string;
  zipCode?: string;
  address?: string;
  service?: string;
  email?: string;
  message?: string;
  phoneNumber?: string;
}

function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValue>({});

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // alert(formValues);
    // setFormValues({});
  };

  return (
    <div className="w-4/5 rounded-xl bg-white shadow-xl overflow-hidden">
      <div className="form-header flex flex-col font-bold sm:items-center text-white">
        <h2 className="text-xl">Contactez-nous pour prendre rendez-vous</h2>
        <p>Nous vous rappelons dans l&apos;heure !</p>
      </div>
      <div className="p-6">
        <form onSubmit={submitHandler}>
          <div className="mb-2 w-full">
            <label>
              <span>Nom*</span>
              <input
                type="text"
                value={formValues.name}
                name="name"
                className="w-full"
                placeholder="Jacques Dupont"
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    name: event.target.value,
                  }))
                }
                required
              />
            </label>
          </div>
          <div className="flex-col sm:flex-row sm:gap-4 flex">
            <div className="mb-2 w-full">
              <label>
                <span>Adresse*</span>
                <input
                  type="text"
                  name="address"
                  className="w-full"
                  value={formValues.address}
                  placeholder="10 rue des Acacias"
                  onChange={(event) =>
                    setFormValues((previousValues) => ({
                      ...previousValues,
                      address: event.target.value,
                    }))
                  }
                  required
                />
              </label>
            </div>
            <div className="mb-2 w-full">
              <label>
                <span>Code postal*</span>
                <input
                  type="text"
                  name="zipCode"
                  className="w-full"
                  value={formValues.zipCode}
                  placeholder="75000"
                  onChange={(event) =>
                    setFormValues((previousValues) => ({
                      ...previousValues,
                      zipCode: event.target.value,
                    }))
                  }
                  required
                />
              </label>
            </div>
          </div>

          <div className="mb-2">
            <label>
              <span>Numéro de téléphone*</span>
              <input
                name="phone"
                type="tel"
                value={formValues.phoneNumber}
                className="block w-full"
                placeholder="06 12 34 56 78"
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    phoneNumber: event.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span>Email*</span>
              <input
                name="email"
                type="email"
                value={formValues.email}
                className="block w-full"
                placeholder="jacques@dupont.com"
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    email: event.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span>Service*</span>
              <select
                name="service"
                value={formValues.service}
                className={`block w-full ${
                  !!formValues.service ? "" : "text-gray-400"
                }`}
                placeholder="john.cooks@example.com"
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    service: event.target.value,
                  }))
                }
              >
                <option value="">Séléctionner une option</option>
                <option value="intervention">Intervention</option>
                <option value="depannage">Dépannage</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Décrivez le plus précisemment possible votre demande"
                value={formValues.message}
                className="w-full"
                rows={5}
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    message: event.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div className="flex justify-between items-center text-italic sm:flex-row flex-col">
            <button type="submit" className="submit block">
              Nous contacter
            </button>
            <p>* Champs obligatoires</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
