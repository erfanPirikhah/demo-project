import {
  DockviewReact,
  DockviewReadyEvent,
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanelHeaderProps,
} from "dockview";
import '../../node_modules/dockview/dist/styles/dockview.css';
const components = {
  default: (props) => {
    return <div>{props.params.someProps}</div>;
  },
};

const headers = {
  customTab: (props) => {
    return (
      <div>
        <span>{props.api.title}</span>
        <span onClick={() => props.api.close()}>{"[x]"}</span>
      </div>
    );
  },
};

const Component = () => {
  const onReady = (event) => {
    event.api.addPanel({
      id: "panel1",
      component: "default",
      tabComponent: "customTab", // optional custom header
      params: {
        someProps: "Hello",
      },
    });
    event.api.addPanel({
      id: "panel2",
      component: "default",
      params: {
        someProps: "World",
      },
      position: { referencePanel: "panel1", direction: "below" },
    });
  };

  return (
    <body classname="dockview-theme-abyss">
      <DockviewReact
        components={components}
        tabComponents={headers} // optional headers renderer
        onReady={onReady}
      />
    </body>
  );
};

export default Component;
