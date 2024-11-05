export default function happy() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-orange-300 to-yellow-200 p-6">
        <div className="animate-fadeIn relative w-full max-w-2xl">
          <div className="animate-float absolute -left-8 -top-8 text-6xl">
            🪔
          </div>
          <div className="animate-float-delayed absolute -bottom-8 -right-8 text-6xl">
            🪔
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-yellow-100 to-orange-100 shadow-[0_0_40px_rgba(255,165,0,0.3)]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-orange-500 to-yellow-500 p-1">
              <div className="absolute inset-0 rounded-[1.9rem] bg-gradient-to-r from-yellow-100 to-orange-100"></div>
            </div>
            <div className="relative overflow-hidden p-8 md:p-12">
              <div className="absolute left-1/2 top-0 h-1 w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              <div className="relative z-10 space-y-8 text-center">
                <div className="relative">
                  <h1 className="text-5xl font-bold md:text-7xl">
                    <span
                      className="relative inline-block bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text px-4 pb-6 pt-2 text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                      style={{
                        backgroundSize: "200%",
                        animation:
                          "3s linear 0s infinite normal none running gradient-x",
                      }}
                    >
                      Happy Diwali
                    </span>
                  </h1>
                </div>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-orange-400"></span>
                  <span className="animate-slideUp text-2xl font-semibold text-orange-800 md:text-3xl">
                    🎇🔥 Coaching Mates🔥🎇
                  </span>
                  <span className="h-[2px] w-12 bg-gradient-to-r from-orange-400 to-transparent"></span>
                </div>
                <div className="animate-fadeIn space-y-6 text-lg leading-relaxed text-orange-700 md:text-xl">
                  <p className="relative">
                    <span className="absolute -left-4 top-0 animate-pulse text-orange-400">
                      ❈
                    </span>
                    May this Diwali bring you joy, prosperity, and abundance.
                    Let the lights of Diwali illuminate your life with happiness
                    and success.
                    <span className="absolute -right-1 bottom-0 animate-pulse text-orange-400">
                      ❈
                    </span>
                  </p>
                  <p className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-2xl font-medium text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                    Wishing you a luminous and prosperous Diwali!
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-4">
                  <div
                    className="animate-glow h-2 w-2 rounded-full bg-orange-500"
                    style={{ animationDelay: "unset" }}
                  ></div>
                  <div
                    className="animate-glow h-2 w-2 rounded-full bg-orange-500"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="animate-glow h-2 w-2 rounded-full bg-orange-500"
                    style={{ animationDelay: "0.6s;" }}
                  ></div>
                  <div
                    className="animate-glow h-2 w-2 rounded-full bg-orange-500"
                    style={{ animationDelay: "0.8s" }}
                  ></div>
                  <div
                    className="animate-glow h-2 w-2 rounded-full bg-orange-500"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 left-0 right-0 flex justify-center">
          <div className="flex items-center gap-4 rounded-full border border-orange-200 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-sm">
            <span className="hidden text-sm text-gray-600 md:block">
              Share this wish:
            </span>
            <div className="flex items-center gap-2">
              <input
                readOnly={true}
                className="w-64 rounded-l-md border-r-0 bg-gray-50 px-4 py-2 text-sm focus:outline-none"
                type="text"
                value="https://diwaligreetings.vercel.app/message/All-group-members-of-Developer-Support-Group"
              />
              <button className="flex items-center gap-2 rounded-r-md bg-orange-500 px-4 py-2 text-white transition-all hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  ></path>
                </svg>
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
