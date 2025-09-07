import React from 'react'

function SmsForm() {
  return (
    <div>
    <div class="relative p-4 w-full max-w-xl max-h-full">
        <div class="relative bg-white rounded-xl shadow-xl sm:shadow-2xl">
        <div
            class="flex items-center justify-between p-2 md:p-5 border-b rounded-t"
        >
              <div>
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    To: Artisan Dental Clinic <img src="images/pages/appointment/bg/tooth.png" alt="tooth" className='w-6 h-6' />
                    </h3>
                    <p class="text-[12px] sm:text-sm text-gray-700 mt-1 ml-7">0961-943-7592 / 0917-717-5300</p>
                </div>

            <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
            <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
            >
                <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
            </svg>
            <span class="sr-only">Close</span>
            </button>
        </div>
        

        <form
            action=""
            method=""
            enctype="multipart/form-data"
            class="p-4 md:p-5"
        >
            <input type="hidden" name="" value="" />

            <div class="relative mb-4">
            <textarea
                name="content"
                id="hs-textarea-ex-2"
                class="p-4 pb-12 block w-full h-60 bg-gray-100 border-none rounded-lg text-md 
                focus:border-none focus:ring-0 focus:outline-none resize-none 
                placeholder-black placeholder:text-xl sm:placeholder:text-lg"
                rows="6"
                placeholder="Name:
Contact Number:
Preferred Date:
Preferred Time Slot:
Type of Service Need:"
                disabled
            ></textarea>

            <div id="preview" class="mb-4"></div>

            <div class="absolute bottom-0 inset-x-0 p-2 rounded-b-md bg-none">
                <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                    disabled
                    >
                    <label for="image" class="cursor-pointer">
                        <svg
                        class="flex-shrink-0 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        disabled
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                        </svg>
                        <input name="image" id="image" type="file" class="hidden" disabled />
                    </label>
                    </button>

                    <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                    disabled
                    >
                    <label for="image" class="cursor-pointer">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                        disabled
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            disabled
                            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                        ></path>
                        </svg>
                        <input name="image" id="image" type="file" class="hidden" />
                    </label>
                    </button>

                    <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                        disabled
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        disabled
                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        ></path>
                    </svg>
                    </button>
                </div>
                <div class="flex items-center gap-x-1">
                    <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        disabled
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        ></path>
                    </svg>
                    </button>

                    <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-white bg-blue-400 hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2"
                    >
                    <svg
                        class="flex-shrink-0 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        disabled
                    >
                        <path
                        disabled
                        d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                        ></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default SmsForm
