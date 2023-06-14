import React from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const Toasts_Page = () => {
  return (
    <div className="flex flex-col space-y-14">
      <div className="grid grid-cols-5 gap-4">
        <button
          onClick={() => {
            toast.loading("Saving...");
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          pending
        </button>
        <button
          onClick={() => {
            toast.success("Successfully toasted!");
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          success
        </button>
        <button
          onClick={() => {
            toast.error("This didn't work.");
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          error
        </button>
        <button
          onClick={() => {
            toast("Good Job!", {
              icon: "👏",
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          icon
        </button>
        <button
          onClick={() => {
            toast((t) => (
              <div className="flex justify-between items-center w-40">
                Custom and <b>bold</b>
                <button
                  className="text-red-500"
                  onClick={() => toast.dismiss(t.id)}
                >
                  X
                </button>
              </div>
            ));
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          Custom
        </button>
        <button
          onClick={() => {
            toast("Hello Darkness!", {
              icon: "👏",
              style: {
                borderRadius: "20px",
                background: "#333",
                color: "#fff",
              },
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          Custom
        </button>
        <button
          onClick={() => {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Emilia Gates
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Sure! 8:30pm works great!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ));
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          Custom
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <button
          onClick={() => {
            Swal.fire("Any fool can use a computer");
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 8
        </button>
        <button
          onClick={() => {
            let timerInterval;
            Swal.fire({
              title: "Auto close alert!",
              html: "I will close in <b></b> milliseconds.",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 9
        </button>

        <button
          onClick={() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 10
        </button>
        <button
          onClick={() => {
            Swal.fire({
              title: "Do you want to save the changes?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
              }
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 11
        </button>
        <button
          onClick={() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 12
        </button>

        <button
          onClick={() => {
            Swal.fire({
              title: "Submit your Github username",
              input: "text",
              inputAttributes: {
                autocapitalize: "off",
              },
              showCancelButton: true,
              confirmButtonText: "Look up",
              showLoaderOnConfirm: true,
              preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error(response.statusText);
                    }
                    return response.json();
                  })
                  .catch((error) => {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                  });
              },
              allowOutsideClick: () => !Swal.isLoading(),
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: `${result.value.login}'s avatar`,
                  imageUrl: result.value.avatar_url,
                });
              }
            });
          }}
          className="bg-red-200 p-1 rounded-xl shadow-lg"
        >
          toast 13
        </button>
      </div>
    </div>
  );
};

export default Toasts_Page;
