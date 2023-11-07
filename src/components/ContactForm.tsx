import React, { FormEvent, useState } from "react";
import { showToastError, showToastSuccess } from "./UI/Toast/toast.helper";
import { buildContactFormData } from "../helper/formData.helper";

export interface ContactFormValue {
  name?: string;
  zipCode?: string;
  address?: string;
  service?: string;
  email?: string;
  message?: string;
  phoneNumber?: string;
  isEmergency?: boolean;
}

function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValue>({});

  const submitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    const formData = buildContactFormData(formValues);
    console.log("formData:", formData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/contact`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        showToastSuccess(
          "Votre demande a bien été prise en compte.\n Nous vous rappelerons dès que possible."
        );
        setFormValues({});
      } else {
        throw new Error(
          `Responded with ${response.status} and message ${response.body}`
        );
      }
    } catch (error: unknown) {
      console.error(error);
      showToastError("Une erreur est survenue");
    }
  };

  return (
    <div className="rounded-xl bg-white shadow-xl overflow-hidden gro w-full">
      <div className="form-header flex flex-col font-bold sm:items-center text-white">
        <h2>Contactez-nous pour prendre rendez-vous</h2>
        <p>Nous vous rappelons dans l&apos;heure !</p>
      </div>
      <div className="p-6">
        <form onSubmit={submitHandler}>
          <div className="mb-2 w-full">
            <label>
              <span>Nom*</span>
              <input
                type="text"
                value={formValues.name || ""}
                name="name"
                className="w-full"
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
                  value={formValues?.address || ""}
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
                  value={formValues?.zipCode || ""}
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
                value={formValues?.phoneNumber || ""}
                className="block w-full"
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
                value={formValues?.email || ""}
                className="block w-full"
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
          <div className="mb-2 sm:flex-row flex flex-col items-center gap-2 ">
            <label className="w-full sm:w-3/4">
              <span>Service*</span>
              <select
                name="service"
                value={formValues?.service || ""}
                className={`block w-full ${
                  !!formValues?.service ? "" : "text-gray-400"
                }`}
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
            <div className="flex items-center mb-4 gap-4 my-auto">
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-full"
              >
                <span>Il s&apos;agit d&apos;une urgence</span>
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    isEmergency: event.target.checked,
                  }))
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
          <div className="mb-2">
            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={formValues?.message || ""}
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
          <label htmlFor="fileUpload" className="flex gap-4 items-center">
            <span>Joindre une photo</span>
            <input type="file" id="fileUpload" className="w-100" />
          </label>
          <div className="flex justify-between items-center text-italic sm:flex-row flex-col mt-4">
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
