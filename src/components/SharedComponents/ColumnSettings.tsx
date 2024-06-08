import React from "react";
import { MdSettings } from "react-icons/md";
import { useTableProps } from "../../hooksAndContexts/TableContext";

const ColumnSettings = () => {
  const { headers, visibleColumns, setVisibleColumns, isColumnVisible } =
    useTableProps();
  return (
    <div>
      <button className="table__settings-button">
        <div className="table__settings-menu">
          {headers.map((header, index) => (
            <label key={index} style={{ width: "100px" }}>
              <input
                type="checkbox"
                width={20}
                height={20}
                style={{
                  display: "inline-block",
                }}
                checked={isColumnVisible(header)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setVisibleColumns((prev) => [...prev, header]);
                  } else {
                    if (visibleColumns.length > 1)
                      setVisibleColumns((prev) =>
                        prev.filter((item) => item.id !== header.id)
                      );
                  }
                }}
              />
              {header.title}
            </label>
          ))}
        </div>
        <MdSettings />
      </button>
    </div>
  );
};

export default ColumnSettings;
