import Interaction from "./Interaction";
const Interactions = () => {
  return (
    <ul className="ml-4 my-2 py-2 border-l-[2px] border-zinc-600 pl-5 flex items-center gap-2">
      <Interaction
        icon={
          <svg
            className="h-5 w-5 text-zinc-100 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
        }
      />
      <Interaction
        icon={
          <svg
            className="h-5 w-5 text-zinc-100 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        }
      />
      <Interaction
        icon={
          <svg
            className="h-5 w-5 text-zinc-100 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />{" "}
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
          </svg>
        }
      />
      <Interaction
        icon={
          <svg
            className="h-4 w-4 text-zinc-100 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />{" "}
            <polyline points="16 6 12 2 8 6" />{" "}
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        }
      />
    </ul>
  );
};
export default Interactions;
