import React, { useState } from 'react';
import './TreeNode.css';

const menuData = [
  { id: 1, title: 'Home', children: [] },
  { id: 2, title: 'About', children: [
    { id: 3, title: 'Team', children: [] },
    { id: 4, title: 'Company', children: [
      { id: 5, title: 'History', children: [] },
      { id: 6, title: 'Vision', children: [] },
    ] },
  ] },
  { id: 7, title: 'Services', children: [
    { id: 8, title: 'Consulting', children: [] },
    { id: 9, title: 'Development', children: [] },
  ] },
];

const TreeNodeItem = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div onClick={handleExpand}>
        {node.children.length > 0 && (
          <span>▶</span>
        )}
        {node.title}
      </div>
      {expanded && node.children.map((child) => (
        <TreeNodeItem key={child.id} node={child} />
      ))}
    </div>
  );
};

const TreeNode = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='TreeView'>
      <h1 className='TreeNodeh1'>Project 6 : Tree View / Recursive Navigation Menu</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Project
      </button>
      {show && (
        <div className="TreenodeContent">
          {menuData.map((node) => (
            <TreeNodeItem key={node.id} node={node} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;
