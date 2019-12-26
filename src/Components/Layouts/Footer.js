import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

export default ({ muscles, category, onSelect }) => {
  //Since value expect an index we need to find the index of the current selected
  //category in muscles
  const index = category
    ? muscles.findIndex(group => {
        return group === category;
      }) + 1
    : 0;

  const onIndexSelected = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelected}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
