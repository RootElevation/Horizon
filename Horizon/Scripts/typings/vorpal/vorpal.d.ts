// Type definitions for Vorpal v1.3.9
// Project: https://github.com/dthree/vorpal
// Definitions by: Nobody <>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module "vorpal" {

    function e(): e.Vorpal;

    module e {
        interface Option {
            /**
             * Initialize a new `Option` instance.
             *
             * @param {String} flags
             * @param {String} description
             * @return {Option}
             * @api public
             */
            (flags: string, description: string): Option;
        }

        interface Command {
            /**
             * Initialize a new `Command` instance.
             *
             * @param {String} name
             * @param {Vorpal} parent
             * @return {Command}
             * @api public
             */
            (name: string, parent: Vorpal): Command;

            /**
             * Registers an option for given command.
             *
             * @param {String} flags
             * @param {String} description
             * @param {Function} fn
             * @param {String} defaultValue
             * @return {Command}
             * @api public
             */
            option(flags: string, description: string, fn: Function, defaultValue: string): Command;

            /**
             * Defines an action for a given command.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            action(fn: (args: string[], cb:() => void) => void): Command;

            /**
             * Defines a method to be called when
             * the command set has completed.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            done(fn: Function): Command;

            /**
             * Defines tabbed auto-completion rules
             * for the given command.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            autocompletion(fn: (text: string, iteration: number, cb: Function) => void): Command;

            /**
             * Defines an init action for a mode command.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            init(fn: Function): Command;

            /**
             * Defines a prompt delimiter for a
             * mode once entered.
             *
             * @param {String} delimiter
             * @return {Command}
             * @api public
             */
            delimiter(delimiter: string): Command;

            /**
             * Defines an alias for a given command.
             *
             * @param {String} alias
             * @return {Command}
             * @api public
             */
            alias(alias: string): Command;

            /**
             * Defines description for given command.
             *
             * @param {String} str
             * @return {Command}
             * @api public
             */
            description(str: string): Command;

            /**
             * Removes self from Vorpal instance.
             *
             * @return {Command}
             * @api public
             */
            remove(): Command;

            /**
             * Returns the commands arguments as string.
             *
             * @param {String} desc
             * @return {String}
             * @api public
             */
            arguments(desc: string): string;

            /**
             * Returns the help info for given command.
             *
             * @return {String}
             * @api public
             */
            helpInformation(): string;

            /**
             * Doesn't show command in the help menu.
             *
             * @return {Command}
             * @api public
             */
            hidden(): Command;

            /**
             * Returns the command usage string for help.
             *
             * @param {String} str
             * @return {String}
             * @api public
             */
            usage(str: string): string;

            /**
             * Returns the help string for the command's options.
             *
             * @return {String}
             * @api public
             */
            optionHelp(): string;

            /**
             * Adds a custom handling for the --help flag.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            help(fn: Function): Command;

            /**
             * Edits the raw command string before it
             * is executed.
             *
             * @param {Function} fn
             * @return {String} str
             * @api public
             */
            parse(fn: (command: string, args: string[]) => string): string;

            /**
             * Adds a command to be executed after command completion.
             *
             * @param {Function} fn
             * @return {Command}
             * @api public
             */
            after(fn: Function): Command;
        }

        interface Prompt {
            
        }

        interface Session {
            /**
             * Pipes logging data through any piped
             * commands, and then sends it to ._log for
             * actual logging.
             *
             * @param {String} [... arguments]
             * @return {Session}
             * @api public
             */
            log(...arguments: string[]): Session;

            /**
             * Returns whether given session
             * is on a local TTY, or remote.
             *
             * @return {Boolean}
             * @api public
             */
            isLocal(): Boolean;

            /**
             * Maps to vorpal.prompt for a session
             * context.
             *
             * @param {Object} options
             * @param {Function} cb
             * @api public
             */
            prompt(options: Object, cb: Function): Prompt;

            /**
             * Gets the full (normal + mode) delimiter
             * for this session.
             *
             * @return {String}
             * @api public
             */
            fullDelimiter(): string;

            /**
             * Sets the delimiter for this session.
             *
             * @param {String} str
             * @return {Session}
             * @api public
             */
            delimiter(str: string): Session;

            /**
             * Sets the mode delimiter for this session.
             *
             * @param {String} str
             * @return {Session}
             * @api public
             */
            modeDelimiter(str: string): Session;

            /**
             * Public facing autocomplete helper.
             *
             * @param {String} str
             * @param {Array} arr
             * @return {String}
             * @api public
             */
            help(command: Command): string;

            
            /**
             * Public facing autocomplete helper.
             *
             * @param {String} str
             * @param {Array} arr
             * @return {String}
             * @api public
             */
            match(str: string, ...arr: any[]): string;

            /**
             * Gets a new command set ready.
             *
             * @return {session}
             * @api public
             */
            execCommandSet(wrapper: Object, callback: Function): Session;

            /**
             * Adds on a command or sub-command in progress.
             * Session keeps tracked of commands,
             * and as soon as all commands have been
             * compelted, the session returns the entire
             * command set as complete.
             *
             * @return {session}
             * @api public
             */
            registerCommand(): Session;

            /**
             * Marks a command or subcommand as having completed.
             * If all commands have completed, calls back
             * to the root command as being done.
             *
             * @return {session}
             * @api public
             */
            completeCommand(): Session;
        }

        interface Vorpal {
            (): Vorpal;

            /**
             * Sets the permanent delimiter for this
             * Vorpal server instance.
             *
             * @param {String} str
             * @return {Vorpal}
             * @api public
             */
            delimiter(str: string): Vorpal;

            /**
             * Imports a library of Vorpal API commands
             * from another Node module as an extension
             * of Vorpal.
             *
             * @param {Array} commands
             * @return {Vorpal}
             * @api public
             */
            use(commands: Function, options?: Object): Vorpal;
            use(commands: string, options?: Object): Vorpal;
            use(commands: any[], options?: Object): Vorpal;

            /**
             * Registers a new command in the vorpal API.
             *
             * @param {String} name
             * @param {String} desc
             * @param {Object} opts
             * @return {Command}
             * @api public
             */
            command(name: string, desc?: string, options?: Object): Command;

            /**
             * Registers a new 'mode' command in the vorpal API.
             *
             * @param {String} name
             * @param {String} desc
             * @param {Object} opts
             * @return {Command}
             * @api public
             */
            mode(name: string, desc?: string, options?: Object): Command;

            /**
             * Registers a 'catch' command in the vorpal API.
             * This is executed when no command matches are found.
             *
             * @param {String} name
             * @param {String} desc
             * @param {Object} opts
             * @return {Command}
             * @api public
             */
            catch(name: string, desc: string, options?: Object): Command;

            /**
             * Delegates to ui.log.
             *
             * @param {String} log
             * @return {Vorpal}
             * @api public
             */
            log(): Vorpal;

            /**
             * Intercepts all logging through `vorpal.log`
             * and runs it through the function declared by
             * `vorpal.pipe()`.
             *
             * @param {Function} fn
             * @return {Vorpal}
             * @api public
             */
            pipe(fn: (Object) => string): Vorpal;

            /**
             * If Vorpal is the local terminal,
             * hook all stdout, through a fn.
             *
             * @return {Vorpal}
             * @api private
             */
            hook(fn: Function): Vorpal;

            /**
             * Hook the tty prompt to this given instance
             * of vorpal.
             *
             * @return {Vorpal}
             * @api public
             */
            show(): Vorpal;

            /**
             * Disables the vorpal prompt on the
             * local terminal.
             *
             * @return {Vorpal}
             * @api public
             */
            hide(): Vorpal;

            /**
             * For use in vorpal API commands, sends
             * a prompt command downstream to the local
             * terminal. Executes a prompt and returns
             * the response upstream to the API command.
             *
             * @param {Object} options
             * @param {Function} cb
             * @return {Vorpal}
             * @api public
             */
            prompt(options: Object, cb: Function): Prompt;

            /**
             * Executes a vorpal API command and
             * returns the response either through a
             * callback or Promise in the absence
             * of a callback.
             *
             * A little black magic here - because
             * we sometimes have to send commands 10
             * miles upstream through 80 other instances
             * of vorpal and we aren't going to send
             * the callback / promise with us on that
             * trip, we store the command, callback,
             * resolve and reject objects (as they apply)
             * in a local vorpal._command variable.
             *
             * When the command eventually comes back
             * downstream, we dig up the callbacks and
             * finally resolve or reject the promise, etc.
             *
             * Lastly, to add some more complexity, we throw
             * command and callbacks into a queue that will
             * be unearthed and sent in due time.
             *
             * @param {String} cmd
             * @param {Function} cb
             * @return {Promise or Vorpal}
             * @api public
             */
            exec(cmd: string, args?: any[]): Promise<Object>;
            exec(cmd: string, cb: Function): Vorpal;
            exec(cmd: string, args: any[], cb: Function): Vorpal;

            /**
             * Registers a custom handler for SIGINT.
             * Vorpal exits with 0 by default
             * on a sigint.
             *
             * @param {Function} fn
             * @return {Vorpal}
             * @api public
             */
            sigint(fn: Function): Vorpal;

            /**
             * Returns the instance of  given command.
             *
             * @param {String} cmd
             * @return {Command}
             * @api public
             */
            find(name: string): Command;

            /**
             * Returns session by id.
             *
             * @param {Integer} id
             * @return {Session}
             * @api public
             */
            getSessionById(id: number): Session;

            /**
             * Kills a remote vorpal session. If user
             * is running on a direct terminal, will kill
             * node instance after confirmation.
             *
             * @param {Object} options
             * @param {Function} cb
             * @api private
             */
            exit(options: Object): void;
        }
    }

    export = e;
}