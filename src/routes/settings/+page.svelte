<style>
    .topnav {
		background-color: #e5e7ec;
		color: black;
		overflow: hidden;
		padding: 12px;
		margin: -8px;
		
	}
	.topnav a {
		padding: 2px 4px;
		text-align: center;
		float: left;
		text-decoration: none;
		color: #8c8c8c;
		
	}
	.topnav a.active {
		text-decoration: underline;
		text-decoration-color: orange;
		color: #1e1e1e;
	}
	.topnav a:hover {
		color: #1e1e1e;
		text-decoration: underline;
	}
	.topnavright {
		float: right;
		padding-right: 1ch;
	}
	.circle {
		height: 2ch;
		width: 2ch;
    border-radius:50%;
		background-color: #ffffff;
		display: block;
	}
	.circle line {
		stroke: black;
		fill: none;
	}
	.circle:hover {
		background-color: #aaaaaa;
	}
</style>

<div class="topnav">
	<a href="/#">Servers</a>
	<a class="active" href="/settings" >Settings</a>
	<div class="topnavright">
	<div>
	<a href="/newserver" class="circle">
		<svg>
			<line x1="10" y1="4" x2="10" y2="16"></line>
			<line x1="4" y1="10" x2="16" y2="10"></line>
		</svg>
	</a>
	</div>
	</div>
</div>
<h1>Settings</h1>