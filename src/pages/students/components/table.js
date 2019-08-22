import React from "react";

export default props => {
  if (!props.headers || !props.data) return null;

  return (
    <table
      className="table"
      // width="100%"
    >
      <thead>
        <tr>
          {props.headers.map(header => {
            return <th title="Field #0">{header.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => {
          return (
            <tr key={Math.random().toString()}>
              {props.headers.map(header => {
                return <td>{row[header.key]}</td>;
              })}

              <td
                data-field="Actions"
                data-autohide-disabled="false"
                className="kt-datatable__cell"
              >
                <span
                  style={{
                    overflow: "visible",
                    position: "relative",
                    width: "110px"
                  }}
                >
                  <button
                    title="Edit details"
                    className="btn btn-sm btn-clean btn-icon btn-icon-md"
                    onClick={() => {
                      props.edit(row);
                    }}
                  >
                    <i className="la la-edit" />
                  </button>
                  <button
                    title="Delete"
                    className="btn btn-sm btn-clean btn-icon btn-icon-md"
                    onClick={() => {
                      props.delete(row);
                    }}
                  >
                    <i className="la la-trash" />
                  </button>
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
