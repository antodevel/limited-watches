// Anchors live inside the transformed watch, so their viewport coordinates
// already include its rotation, translation and responsive dimensions.
export function createDetailConnectorUpdater(panels: HTMLElement[]) {
  const connectors = panels.map((panel, index) => ({
    svg: panel.querySelector<SVGSVGElement>('.detail-connector'),
    path: panel.querySelector<SVGPathElement>('.detail-connector path'),
    dot: panel.querySelector<SVGCircleElement>('.detail-connector circle'),
    copy: panel.querySelector<HTMLElement>('p:last-of-type'),
    anchor: document.querySelector<HTMLElement>(`.detail-anchor[data-anchor="0${index + 1}"]`),
  }));

  return () => {
    // Read geometry first, then write all paths to avoid interleaved layouts.
    const positions = connectors.map(({ svg, copy, anchor }) => {
      if (!svg || !copy || !anchor) return null;
      const matrix = svg.getScreenCTM();
      if (!matrix) return null;
      const inverse = matrix.inverse();
      const target = anchor.getBoundingClientRect();
      const label = copy.getBoundingClientRect();
      const end = new DOMPoint(target.left, target.top).matrixTransform(inverse);
      const start = new DOMPoint(label.right + 28, label.top + 12).matrixTransform(inverse);
      const elbow = start.x + Math.max(0, (end.x - start.x) * .35);
      return { end, d: `M${start.x} ${start.y}H${elbow}L${end.x} ${end.y}` };
    });
    connectors.forEach(({ path, dot }, index) => {
      const position = positions[index];
      if (!position || !path || !dot) return;
      path.setAttribute('d', position.d);
      dot.setAttribute('cx', String(position.end.x));
      dot.setAttribute('cy', String(position.end.y));
    });
  };
}
