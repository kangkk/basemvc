# CNPM
## nrm
```
npm install -g nrm
nrm test
nrm ls
nrm use cnpm
```


设置cnpm。

## 使用说明

你可以使用我们定制的 [cnpm](https://github.com/cnpm/cnpm) (gzip 压缩支持) 命令行工具代替默认的 `npm`:

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

或者你直接通过添加 `npm` 参数 `alias` 一个新命令:

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

# Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### 安装模块

从 [registry.npm.taobao.org](https://registry.npm.taobao.org/) 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM [registry.npmjs.org](https://registry.npmjs.org/) 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了.

```bash
$ cnpm install [name]
```

### 同步模块

直接通过 `sync` 命令马上同步一个模块, 只有 `cnpm` 命令行才有此功能:

```bash
$ cnpm sync connect
```

当然, 你可以直接通过 web 方式来同步: [/sync/connect](https://npm.taobao.org/sync/connect)

```bash
$ open https://npm.taobao.org/sync/connect
```

### 其它命令

支持 `npm` 除了 `publish` 之外的所有命令, 如:

```bash
$ cnpm info connect
```

## Install

```
$ npm install cnpm -g
```

If you're in China, maybe you should install it from our [China mirror](https://npm.taobao.org/):

```
$ npm install cnpm -g --registry=https://r.npm.taobao.org
```

## Usage

Support all commands just like `npm`.

### Sync packages from `npm`

```
$ cnpm sync [moduleName]
```

### Open package document or git web url

```
$ cnpm doc [name]
$ cnpm doc -g [name] # open git web url directly
```

## Build your own private registry npm cli

```
$ npm install cnpm -g

# then alias it
$ alias mynpm='cnpm --registry=http://registry.npm.example.com \
  --registryweb=http://npm.example.com \
  --userconfig=$HOME/.mynpmrc'
```

## Install with original npm cli

cnpm using [npminstall](https://github.com/cnpm/npminstall) by default. If you don't like symlink mode for `node_modules`, you can change the installer to original npm. But you will lose the fastest install speed.

```
$ cnpm i --by=npm react-native
```
