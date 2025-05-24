import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load groups:", err);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    document.title = "All Groups | Hobby Hub";
  }, []);

  if (loading)
    return (
      <div className="text-center  py-10 text-xl">
        <h1 className="text-4xl mb-10 text font-bold mt-10">
          There is no groups created
        </h1>
        <div className="mb-10 text-center ">
          <div className=" mx-auto w-[10%] p-0.5 background rounded-full"></div>
        </div>
      </div>
    );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text">
        All Hobby Groups
      </h2>

      <div className="mb-10 text-center ">
        <div className=" mx-auto w-[10%] p-0.5 background rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.length === 0 ? (
          <p className="col-span-3 text-center text-base">No groups found.</p>
        ) : (
          groups.map((group) => (
            <div
              key={group._id}
              className=" bg-base border-b-pink-400 rounded-lg  hover:shadow-2xl shadow-pink-400 transition duration-300"
            >
              <img
                src={group.image}
                alt={group.groupName}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: "var(--text-base)" }}
                >
                  {group.groupName}
                </h3>
                <p className=" text-sm"
                style={{ color: "var(--text-base)" }}
                >
                  {group.category}
                </p>
                <Link
                  to={`/group/${group._id}`}
                  className="inline-block mt-4 px-4 py-2 background   text-sm rounded-lg  transition duration-200"
               style={{ color: "var(--text-base)" }}
               >
                  See More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllGroups;
