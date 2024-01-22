<h1>Higher Level Thoughts, Considerations, Limitations</h1>
<h2>Displaying Variations Randomly</h2>
<ul>
    <li>Utilize CSS to initially hide one of the variations randomly</li>
    <li>Assign unique IDs to variations using data attributes for accurate tracking, requiring adherence to instructions by content editors</li>
    <h3>Limitations</h3>
    <ul>
        <li>Brief visibility gap before JavaScript execution, though it's preferable to displaying both variations</li>
        <li>Potential impact on SEO due to initial content hiding</li>
        <li>Lack of server-side control over variation assignment, therefore uneven traffic distribution among variations</li>
    </ul>
</ul>

<h2>Storage Selection Considerations</h2>
<ul>
    <li>Choose between sessionStorage (within the current tab, survives refresh) and LocalStorage (survives browser restart)</li>
    <li>Prefer localStorage over cookies to prevent sending web storage data with each server request</li>
    <h3>Limitations</h3>
    <ul>
        <li>SessionStorage limitations in private browsing (cleared on tab closure)</li>
        <li>PSecurity considerations with localStorage</li>
    </ul>
</ul>

<h2>Tracking Page Views and Click Events</h2>
<ul>
    <li>Generate a unique UserId using a UUID tool, ensuring each tracking object is linked to a specific user for data filtering</li>
    <li>Limit actions to a single count per user, maintaining accurate statistics</li>
</ul>

<h2>General Limitations</h2>
<ul>
    <li>CTR Calculation: Lack of backend restricts persistent data storage, limiting the implementation of Click-Through Rate (CTR) calculations</li>
    <li>Testing: Incomplete testing coverage</li>
    <li>Error Handling: Absence of comprehensive error catching as seen in validation of control variations</li>
    <li>Variation Display Distribution: Uneven distribution of variation displays among users</li>
    <li>Content Editor Guide: Requirement for a guide instructing content editors on proper content editing procedures</li>
</ul>
