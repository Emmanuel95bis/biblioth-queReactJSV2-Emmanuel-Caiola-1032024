import React from "react";

export const Requirements = ({ header, users }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {header.map((element, index) => (
            <th key={index}>
              {element}
              <div>
                <i className="fa-solid fa-caret-up"></i>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((employee, rowIndex) => (
          <tr key={rowIndex}>
            {Array.isArray(employee) &&
              employee.map((line, cellIndex) => (
                <td key={cellIndex}>{line}</td>
              ))}

            {typeof employee === "object" && employee !== null && (
              <>
                {Object.values(employee).map((value, cellIndex) => (
                  <td key={cellIndex}>{value}</td>
                ))}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
