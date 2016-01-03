# KanbanBoard by Pedro Resende to Mantis Bugtracker
Mantis BT plugin which allows to drag issues between status columns to change their status.

# Installation

go into you plugins folder and run the command

```
git clone git@github.com:pedroresende/MantisBTKanbanBoard.git
```

Back into mantis BT, go to Manage > Manage Plugins > Available Plugins and install Kanban Board 1.0

Open you config_inc.php file and add the following

```
# Revised enum string with new 'testing' status
$g_status_enum_string = '10:backlog,20:inputq,40:analysis,50:development,60:testing,80:resolved,90:closed';

# Status color additions
$g_status_colors['inputq'] = '#FFFFB2';
$g_status_colors['testing'] = '#ACE7AE';
$g_status_colors['analysis'] = '#B2B2FF';
$g_status_colors['development'] = '#CCCCCC';


$g_status_enum_workflow[BACKLOG]         ='20:inputq,40:analysis,50:development,80:resolved';
$g_status_enum_workflow[INPUTQ]     ='40:analysis,50:development,80:resolved';
$g_status_enum_workflow[ANALYSIS]    ='50:development,80:resolved';
$g_status_enum_workflow[DEVELOPMENT]     ='60:testing,20:inputq,40:analysis,50:developmentdev,80:resolved';
$g_status_enum_workflow[TESTING]      ='80:resolved,20:inputq,40:analysis,50:development';
$g_status_enum_workflow[RESOLVED]     ='90:closed,20:inputq,50:development';
$g_status_enum_workflow[CLOSED]       ='20:inputq,40:analysis,50:development';
```

Add a new file, to the root of mantis, called custom_constants_inc.php and add

```
<?php
	# Custom status code
	define( 'BACKLOG', 10 );
	define( 'INPUTQ', 20 );
	define( 'ANALYSIS', 40 );
	define( 'DEVELOPMENT', 50 );
	define( 'TESTING', 60 );
```

Finally add a new file, to the root of mantis, called custom_string_inc.php and add

```
<?php
switch( $g_active_language ) {

	default: # english
		$s_status_enum_string = '10:Backlog,20:InputQ,40:Analysis,50:Development,60:Testing,80:Resolved,90:Closed';

		$s_backlog_bug_title = 'Mark issue Ready for Backlog';
		$s_backlog_bug_button = 'Ready for Backlog';

		$s_email_notification_title_for_status_bug_backlog = 'The following issue is ready for Backlog.';

		$s_inputq_bug_title = 'Mark issue Ready for InputQ';
		$s_inputq_bug_button = 'Ready for InputQ';

		$s_email_notification_title_for_status_bug_inputq = 'The following issue is ready for InputQ.';

		$s_analysis_bug_title = 'Mark issue Ready for Analysis';
		$s_analysis_bug_button = 'Ready for Analysis';

		$s_email_notification_title_for_status_bug_analysis = 'The following issue is ready for Analysis.';

		$s_development_bug_title = 'Mark issue Ready for Development';
		$s_development_bug_button = 'Ready for Development';

		$s_email_notification_title_for_status_bug_development = 'The following issue is ready for Development.';

		$s_testing_bug_title = 'Mark issue Ready for Testing';
		$s_testing_bug_button = 'Ready for Testing';

		$s_email_notification_title_for_status_bug_testing = 'The following issue is ready for TESTING.';
		break;
}
```
