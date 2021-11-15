'use strict';

/* 全局定义了 $, app, socket, define */

define('admin/plugins/banner', ['settings'], function (Settings) {
	var ACP = {};

	ACP.init = function () {
		Settings.load('banner', $('.banner-settings'));

		$('#save').on('click', function () {
			Settings.save('banner', $('.banner-settings'), function () {
				app.alert({
					type: 'success',
					alert_id: 'banner-saved',
					title: 'Settings Saved',
					message: '点击以重启你的 NodeBB 使变动生效。',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});
	};

	return ACP;
});
