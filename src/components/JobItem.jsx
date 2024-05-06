/* eslint-disable react/prop-types */
export default function JobItem({ item }) {
  const { buyer, deadline, category, title, description, maxPrice, minPrice } =
    item || {};
  const { name, avatar } = buyer || {};
  return (
    <div className="border-b border-opacity-15">
      <div className=" bg-gray-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 object-cover rounded-full border border-indigo-500"
                src={avatar}
                alt=""
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h6 className="text-xl font-medium">{name}</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="space-x-3">
            <button className="bg-indigo-500 text-sm text-white px-5 py-1 rounded-3xl">
              {category?.title}
            </button>
            <button className="bg-indigo-800 text-sm text-white px-5 py-1 rounded-3xl">
              New
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h1 className="text-xl font-medium">{title}</h1>
          <p>{description}</p>
          <p>
            Range: ${minPrice} - ${maxPrice}
          </p>
          <p>Deadline: {deadline}</p>
        </div>
        <div className="mt-4">
          <button className="bg-indigo-500 text-white px-5 py-1 rounded-3xl text-base font-medium">
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
}
