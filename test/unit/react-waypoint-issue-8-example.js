import reactWaypointIssue8Example from '../../src/react-waypoint-issue-8-example';

describe('reactWaypointIssue8Example', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(reactWaypointIssue8Example, 'greet');
      reactWaypointIssue8Example.greet();
    });

    it('should have been run once', () => {
      expect(reactWaypointIssue8Example.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(reactWaypointIssue8Example.greet).to.have.always.returned('hello');
    });
  });
});
