function alphabeticaly(a, b) {
    if (a.node['Name'] < b.node['Name']) return -1;
    if (a.node['Name'] > b.node['Name']) return 1;
    return 0;
}

export { alphabeticaly };