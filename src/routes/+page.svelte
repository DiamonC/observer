<script>
	
	//Example
	let ServerName = 'Server Name';
	let name = 'world';
	
	//Icons
	let paperico = 'https://raw.githubusercontent.com/modrinth/art/a05e2307b42762d64a370a3cf3e8b6b30735dce1/Icons/Paper.svg';
	
	var id = 0;
	var servercreate = false;
	const serverName = [];
	const serverLoader = [];
	const serverVersion = [];
	function newserver() {
		
	
	}
</script>
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
	body {
		margin: 0;
		padding: 0;
	}
	.servercard {
		
		background-color: #cccccc;
		width: 45ch;
		height: 10ch;
		border-radius: 10px;
		padding: 0ch 1ch;
		font-size: 1.3ch;
	}
	
	.playercount {
	float:right;
	margin:-1ch;
		
		
	}
</style>
<div class="topnav">
	<a href="/#" class="active">Servers</a>
	<a href="/settings" >Settings</a>
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
<body>
<div class="servercard">
	
	
		<h3>
		{ServerName}
	</h3>
		<p>
			<b>Version:</b> Latest | <b>Loaders:</b> <img src="{paperico}" style="width:2ch;" alt="Paper">
	</p>
		
	
	<p class="playercount">
		1/20
	</p>
</div>



</body>