/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xGXnaVQE17m
 */
export default function Component() {
  return (
    <div className="w-[1024px] rounded-lg bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <PinIcon className="text-gray-700" />
        <span className="font-semibold">Pinned</span>
      </div>
      <p className="mt-2 text-gray-700">
        Hey there! You can check out more blog created by me by visiting my Medium profile. Thanks and here is
        <a className="text-blue-600 hover:underline" href="#">
          link
        </a>
      </p>
    </div>
  )
}

function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}
