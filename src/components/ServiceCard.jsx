import { Link } from "react-router-dom";

export default function ServiceCard({ title, desc, link }) {
  return (
    <Link to={link}>
      <div className="bg-white hover:shadow-lg transition-shadow p-6 rounded-lg border border-gray-200 h-full group">
        <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
          {title}
        </h4>
        <p className="text-gray-600">{desc}</p>
        <div className="mt-4 text-blue-600 group-hover:translate-x-1 transition-transform flex items-center">
          Learn more
          <span className="ml-2 transform group-hover:translate-x-1 transition">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}