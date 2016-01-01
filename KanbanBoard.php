<?php

class KanbanBoardPlugin extends MantisPlugin {

    /**
     *  A method that populates the plugin information and minimum requirements.
     */
    function register() {
        $this->name = 'Kanban Board';
        $this->description = 'Change status of issues by dragging them';
        $this->page = '';

        $this->version = '1.0';
        $this->requires = array(
            'MantisCore' => '1.2.0',
        );

        $this->author = 'Pedro Resende';
        $this->contact = 'pedroresende@mail.resende.biz';
        $this->url = 'http://www.pedro.resende.biz';
    }

    function events() {
        return array(
            'EVENT_MENU_MAIN' => EVENT_TYPE_DEFAULT,
        );
    }

    function hooks() {
        return array(
            'EVENT_MENU_MAIN' => 'addMenu',
        );
    }

    function config() {
        return array(
            'foo_or_bar' => 'foo',
        );
    }

    function addMenu($event_name, $param) {
        return '<a href="' .
                plugin_page('kanban') .
                '">Kanban Board</a>';
    }

}
