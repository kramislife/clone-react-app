import { socials } from "@constant/Index";
const Socials = () => {
  return (
    <div className="flex flex-col space-y-4 mt-5">
      <div>
        <h6 className="gradient font-semibold text-lg tracking-tight">
          Connect with us
        </h6>
      </div>
      <div className="flex space-x-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-neutral-300 transition-transform duration-300 hover:scale-125  ${
              index === 0 && "hover:text-blue-600"
            } 
            ${index === 1 && "hover:text-pink-500"} 
            ${index === 2 && "hover:text-sky-400"} 
            ${index === 3 && "hover:text-blue-700"}
            ${index === 4 && "hover:text-green-600"}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
