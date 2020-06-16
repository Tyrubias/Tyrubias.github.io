<script>
    import TopBar from "../components/TopBar"
    import Gutter from "../components/Gutter"
</script>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
        margin: auto;
        width: 75%;
    }

    span {
        font-family: "Lato";
        font-size: 3vh;
        font-weight: 300;
        color: white;
        margin: 0 5vw 0 5vw;
    }

    span ul {
        font-family: "Lato";
        font-size: 3vh;
        font-weight: 300;
        color: white;
        list-style: none;
        margin: 0 5vw 0 5vw;
    }

    span li:before {
        content: "-";
        padding-right: 0.25vw;
    }
</style>

<TopBar />

<div>
    <h2>Rice University</h2>

    <span>
        <b>Attended from:</b>
        August 2018 to present
        <br />
        <b>Major:</b>
        Bachelor of Arts in Computer Science, Statistics
        <br />
        <b>Minors:</b>
        Biochemistry and Cell Biology
        <br />
        <b>GPA:</b>
        3.569 / 4.0
        <br />
        <b>Major GPA (Computer Science):</b>
        3.621 / 4.0
        <br />
        <b>Major GPA (Statistics):</b>
        3.785 / 4.0
        <br />
        <b>Relevant Courses:</b>
        <ul>
            <li>
                COMP 382: Reasoning About Algorithms
                <i>(future)</i>
            </li>
            <li>
                COMP 215: Introduction to Program Design
                <i>(future)</i>
            </li>
            <li>COMP 182: Algorithmic Thinking</li>
            <li>COMP 140: Computational Thinking</li>
            <li>
                STAT 413: Introduction to Statistical Machine Learning
                <i>(future)</i>
            </li>
            <li>STAT 410: Linear Regression</li>
            <li>STAT 405: R for Data Science</li>
            <li>MATH 355: Linear Algebra</li>
            <li>
                MATH: 212: Multivariable Calculus
                <i>(in-progress)</i>
            </li>
            <li>
                MATH 211: Ordinary Differential Equations and Linear Algebra
            </li>
        </ul>
    </span>
</div>

<Gutter />
