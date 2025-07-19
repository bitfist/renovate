module.exports = {
    "secrets": {
        "RENOVATE_TOKEN": String(process.env.RENOVATE_TOKEN)
    },
    "autodiscover": true,
    "gitAuthor": "bitfist <me@renelebherz.com>",
    "automerge": true,
    "autodiscoverFilter": ["bitfist/*"],
    "extends": [
        "config:recommended",
        ":semanticCommits"
    ],
    "packageRules": [
        {
            "matchDatasources": [
                "npm"
            ],
            "minimumReleaseAge": "3 days",
            "prCreation": "not-pending"
        },
        {
            "matchDatasources": [
                "maven",
                "gradle"
            ],
            "matchUpdateTypes": ["major", "minor", "patch"],
            "automerge": true,
        },
        // region Changelog lookup
        {
            "matchDepNames": [
                "io.spring.dependency-management"
            ],
            "changelogUrl": "https://github.com/spring-gradle-plugins/dependency-management-plugin"
        },
        // endregion
        // region Semantic release configuration
        {
            "description": "Breaking PR for major updates",
            "matchDatasources": [
                "maven",
                "gradle"
            ],
            "matchUpdateTypes": ["major"],
            "semanticCommitType": "feat",
            "commitMessagePrefix": "feat!",
            "commitBody": "BREAKING CHANGE: support {{packageName}} {{newVersion}}"
        },
        {
            "description": "Feature PR for minor updates",
            "matchDatasources": [
                "maven",
                "gradle"
            ],
            "matchUpdateTypes": ["minor"],
            "semanticCommitType": "feat"
        },
        {
            "description": "Fix PR for patch updates",
            "matchDatasources": [
                "maven",
                "gradle"
            ],
            "matchUpdateTypes": ["patch"],
            "semanticCommitType": "fix"
        },
        // endregion
        // region Maven package repository registration
        {
            "matchDatasources": [
                "maven"
            ],
            "registryUrls": [
                "https://repo1.maven.org/maven2/",
                "https://plugins.gradle.org/m2/",
                "https://maven.pkg.github.com/bitfist/gradle-github-support",
                "https://maven.pkg.github.com/bitfist/jcef-gradle-plugin",
                "https://maven.pkg.github.com/bitfist/jcef-spring-boot-starter",
                "https://maven.pkg.github.com/bitfist/os-conditions-spring-boot-starter"
            ],
            "matchPackageNames": [
                "/io.github.bitfist.*/"
            ]
        },
        // endregion
        // region Dependency groupy
        {
            "groupName": "kotlin-spring",
            "matchDepNames": [
                "org.jetbrains.kotlin.jvm",
                "org.jetbrains.kotlin.plugin.spring"
            ]
        },
        {
            "groupName": "mapstruct",
            "matchPackageNames": [
                "org.mapstruct:mapstruct:{/,}**"
            ]
        },
        {
            "groupName": "SpringDoc",
            "matchPackageNames": [
                "org.springdoc:{/,}**"
            ]
        },
        {
            "groupName": "Apache Avro",
            "matchPackageNames": [
                "org.apache.avro:{/,}**"
            ]
        },
        {
            "matchDatasources": [
                "maven"
            ],
            "groupName": "OpenRewrite",
            "matchPackageNames": [
                "org.openrewrite{/,}**"
            ]
        }
        // endregion
    ],
    "assigneesFromCodeOwners": true,
    "labels": [
        "renovate",
        "dependencies",
        "automated"
    ],
    "hostRules": [
        {
            "hostType": "maven",
            "matchHost": "https://maven.pkg.github.com",
            "token": String(process.env.RENOVATE_TOKEN)
        }
    ]
};
