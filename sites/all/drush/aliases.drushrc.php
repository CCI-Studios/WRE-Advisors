<?php

$aliases['dev'] = array(
	'uri'=> 'dev.wreadvisors.ca',
	'root' => '/home/wreadvis/subdomains/dev/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'wreadvis',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);

$aliases['live'] = array(
	'uri'=> 'live.wreadvisors.ca',
	'root' => '/home/wreadvis/subdomains/live/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'wreadvis',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);

