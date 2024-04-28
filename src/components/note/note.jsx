import PropTypes from "prop-types";
import Tag from "../tag/tag";

export default function Note({ data, ...rest }) {
  return (
    <div
      {...rest}
      className="rounded-xl p-6 mt-4 w-full bg-zinc-700 hover:bg-zinc-600">
      <h1 className="text-2xl">{data.title}</h1>

      {data.tags && (
        <footer className="flex mt-6">
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </div>
  );
}

Note.propTypes = {
  data: PropTypes.object.isRequired,
};
