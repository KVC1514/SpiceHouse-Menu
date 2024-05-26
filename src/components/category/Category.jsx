import { useNavigate } from "react-router-dom";

// category
const category = [
  { name: "Popular dishes" },
  { name: "Starters" },
  { name: "Mains" },
  { name: "Tandori specials" }, 
  { name: "Nepali starters" },
  { name: "Nepali dishes" },
  { name: "Pizzas" },
  { name: "Sides" },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-30">
      <div
        className="flex flex-col overflow-auto hide-scroll-bar"
        style={{ maxHeight: "90vh" }}
      >
        {category.map((item, index) => {
          return (
            <div key={index} className="px-3 py-2">
              <div
                onClick={() => navigate(`category/${item.name}`)}
                className="w-32 h-16 lg:w-48 lg:h-24 max-w-xs  bg-red-800 transition-all hover:bg-red-500 cursor-pointer mb-1 flex justify-center items-center"
              >
                <div className="flex justify-cente text-white text-lg">
                  {item.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }",
        }}
      />
    </div>
  );
};

export default Category;
